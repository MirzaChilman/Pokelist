import React, { useEffect, useState } from "react";
import PokemonContainer from "../../containers/PokemonContainer/PokemonContainer";
import styled from "@emotion/styled";
import { BACKGROUND, BOX } from "../../theme/theme";
import { useParams } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import useLocalStorage from "../../utils/useLocalStorage";
import { toast } from "react-toastify";
import Button from "../../components/Button/Button";

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

const Detail = () => {
  const params = useParams<{ pokemonName: string }>();
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
    fetchPokemonDetail(params.pokemonName);
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
        return ownedPokemon.some((item) => item.nickName === pokemonName);
      };
      if (isNickNameExist()) {
        setAlertMessage("Duh lupa ya? kan yang namanya itu udah ada, coba nickname lain gih");
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
      toast.success("Wah berhasil berhasil, cek profil anda gan!", {
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
          onClose={() => setOpenSuccessModal(false)}
        >
          <h2>Demi Apa??</h2>
          <h3>Kamu Berhasil Menangkapnya</h3>
          <h4>Beri pokemon mu nama tuan, biar semakin wantap wantap</h4>
          <div>
            <input
              type="text"
              value={pokemonName}
              placeholder={"Nama Pokemon mu tuan"}
              onChange={(event) => {
                setAlertMessage("");
                setPokemonName(event.target.value);
              }}
            />
            <button onClick={savePokemon}>Simpan</button>
          </div>
          {alertMessage && <AlertMessage>{alertMessage}</AlertMessage>}
        </Modal>
        <Modal
          styles={ModalStyleDanger}
          open={openFailModal}
          onClose={() => setOpenFailModal(false)}
        >
          <h2>Oh Paduka Raja</h2>
          <h3>Anda terlalu lemah untuk mendapatkan cintanya</h3>
          <h3>Mohon coba lagi, jika cinta anda sudah cukup kuat</h3>
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
              alt={pokemonDetail?.sprites?.front_default}
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
              <Button onClick={handleCatchButtonClick}>Catch</Button>
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
      {fetchingPokemonDetail && "Loading . . ."}
    </Box>
  );
};

export default Detail;
