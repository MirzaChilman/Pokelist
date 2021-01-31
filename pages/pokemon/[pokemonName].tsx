import React, { useEffect, useState } from "react";
import PokemonContainer from "../../containers/PokemonContainer/PokemonContainer";
import styled from "@emotion/styled";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import useLocalStorage from "../../utils/useLocalStorage";
import { toast } from "react-toastify";
import Button from "../../components/Button/Button";
import { BACKGROUND, BOX } from "components/colors";
import OverlayLoading from "../../components/OverlayLoading/OverlayLoading";

const Box = styled.div`
  margin: 8px 4px;
  padding: 16px;
  border: 1px solid ${BOX.COLOR.border};
  .wrapper {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

const ModalStyleSuccess = {
  modal: {
    background: BACKGROUND.COLOR.success,
  },
};

const ModalStyleDanger = {
  modal: {
    background: BACKGROUND.COLOR.danger,
  },
};

const AlertMessage = styled.p`
  background-color: ${BACKGROUND.COLOR.danger};
  color: white;
  margin-top: 8px;
  padding: 8px;
`;

export async function getServerSideProps(context) {
  return {
    props: {
      pokemonName: context.query.pokemonName,
    },
  };
}

const Detail = (props) => {
  const [ownedPokemon, setOwnedPokemon] = useLocalStorage<string>(
    "ownedPokemon",
    ""
  );
  const [pokemonName, setPokemonName] = useState<string>("");
  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);
  const [openFailModal, setOpenFailModal] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const pokemonContainer = PokemonContainer.useContainer();
  const {
    fetchPokemonDetail,
    pokemonDetail,
    fetchingPokemonDetail,
  } = pokemonContainer;
  useEffect(() => {
    fetchPokemonDetail(props.pokemonName);
  }, []);

  const handleCatchButtonClick = () => {
    /**
     *
     * @param probabilityChance {number}, it is a number between 0 - 10 with 10 as 100%
     */
    const probability = ((probabilityChance: number = 0.5) => {
      return !!probabilityChance && Math.random() <= probabilityChance;
    })();
    if (probability) {
      setOpenSuccessModal(true);
    } else {
      setOpenFailModal(true);
    }
  };

  const renderModal = () => {
    const savePokemon = () => {
      const isNickNameExist = () => {
        return (ownedPokemon as any).some(
          (item) => item.nickName === pokemonName
        );
      };
      if (ownedPokemon.length > 0 && isNickNameExist()) {
        setAlertMessage(
          "Oh my, did you forget? You already user that nickname, use another"
        );
        return;
      }
      if(!pokemonName){
        setAlertMessage(
            "Give it nickname my lord"
        );
        return;
      }
      const catchedPokemon = {
        name: pokemonDetail.name,
        nickName: pokemonName,
        image: pokemonDetail.sprites.front_default,
      };

      (setOwnedPokemon as any)((prevState) => {
        if (prevState) {
          return [...prevState, catchedPokemon];
        }
        return [catchedPokemon];
      });
      toast.success("Good lord, you got it, check your profile now!", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setPokemonName("");
      setOpenSuccessModal(false);
    };
    return (
      <>
        <Modal
          styles={ModalStyleSuccess}
          open={openSuccessModal}
          onClose={() => {
            setPokemonName("");
            setOpenSuccessModal(false);
          }}
        >
          <h2>For real?</h2>
          <h3>You succeed catch it</h3>
          <h4>Give your pokemon nickname my lord</h4>
          <div>
            <input
              type="text"
              value={pokemonName}
              placeholder={"Your pokemon nickname"}
              onChange={(event) => {
                setAlertMessage("");
                setPokemonName(event.target.value);
              }}
            />
            <button aria-label="save" onClick={savePokemon}>
              Save
            </button>
          </div>
          {alertMessage && <AlertMessage>{alertMessage}</AlertMessage>}
        </Modal>
        <Modal
          styles={ModalStyleDanger}
          open={openFailModal}
          onClose={() => setOpenFailModal(false)}
        >
          <h2>Failed</h2>
          <h3>Too bad, try again until you succeed</h3>
        </Modal>
      </>
    );
  };

  return (
    <Box>
      {renderModal()}
      {!fetchingPokemonDetail && pokemonDetail && (
        <div className="wrapper">
          <div>
            <img
              src={pokemonDetail?.sprites?.front_default}
              alt={`Pokemon ${props.pokemonName || ""}`}
              height={96}
              width={96}
            />
          </div>
          <div>
            <div>
              <h2>Name</h2>
              <p>{pokemonDetail.name}</p>
            </div>
            <div>
              <Button aria-label="Catch" onClick={handleCatchButtonClick}>
                Catch
              </Button>
            </div>
            <div>
              <h2>Types</h2>
              {pokemonDetail.types.map((type) => {
                return <p>{type.type.name}</p>;
              })}
            </div>
            <div>
              <h2>Moves</h2>
              {pokemonDetail.moves.map((move) => {
                return <p>{move.move.name}</p>;
              })}
            </div>
          </div>
          <div></div>
        </div>
      )}
      {fetchingPokemonDetail && <OverlayLoading />}
    </Box>
  );
};

export default Detail;
