import React, { useEffect, useState } from "react";
import PokemonContainer from "../../containers/PokemonContainer/PokemonContainer";
import styled from "@emotion/styled";
import { BACKGROUND, BOX } from "../../theme/theme";
import { useParams } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import useLocalStorage from "../../utils/useLocalStorage";
const Box = styled.div`
  margin: 16px;
  padding: 16px;
  border: 1px solid ${BOX.COLOR.border};
`;

const ModalStyle = {
  modal: {
    background: BACKGROUND.COLOR.secondary,
  },
};

const Detail = () => {
  const params = useParams<{ pokemonName: string }>();
  const [ownedPokemon, setOwnedPokemon] = useLocalStorage<string>(
    "ownedPokemon",
    ""
  );
  const [pokemonName, setPokemonName] = useState<string>("");

  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);
  const [openFailModal, setOpenFailModal] = useState<boolean>(false);
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
      setOpenSuccessModal(false);
    };
    return (
      <>
        <Modal
          styles={ModalStyle}
          open={openSuccessModal}
          onClose={() => setOpenSuccessModal(false)}
        >
          <h2>Demi Apa??</h2>
          <h3>Kamu Berhasil Menangkapnya</h3>
          <h4>Beri pokemon mu nama tuan, biar semakin wantap wantap</h4>
          <input
            type="text"
            value={pokemonName}
            placeholder={"Nama Pokemon mu tuan"}
            onChange={(event) => setPokemonName(event.target.value)}
          />
          <button onClick={savePokemon}>Simpan</button>
        </Modal>
        <Modal
          styles={ModalStyle}
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
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
              <h5>Name</h5>
              <p>{pokemonDetail.name}</p>
            </div>
            <div>
              <button onClick={handleCatchButtonClick}>Catch</button>
            </div>
            <div>
              <h5>Types</h5>
              {pokemonDetail.types.map((type) => {
                return <p>{type.type.name}</p>;
              })}
            </div>
            <div>
              <h5>Moves</h5>
              {pokemonDetail.moves.map((move) => {
                return <p>{move.move.name}</p>;
              })}
            </div>
          </div>
        </div>
      )}
      {fetchingPokemonDetail && "Loading . . ."}
    </Box>
  );
};

export default Detail;
