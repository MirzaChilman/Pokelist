import * as React from "react";
import Card from "../../components/Card/Card";
import useLocalStorage from "../../utils/useLocalStorage";
import styled from "@emotion/styled";
import Button from "../../components/Button/Button";
import { toast } from "react-toastify";

const NameBox = styled.div`
  display: flex;
  div {
    margin: 0 16px 0 0;
  }
`;

const ImageBox = styled.div`
  margin-right: 8px;
`;

const Profile = () => {
  const [ownedPokemon, setOwnedPokemon] = useLocalStorage("ownedPokemon", "");
  const handleRelease = (nickName: string) => {
    const filteredOwnedPokemon =
      ownedPokemon &&
      (ownedPokemon as any).filter((pokemon) => {
        return pokemon.nickName !== nickName;
      });
    toast.success(`${nickName} sudah dilepaskan`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    (setOwnedPokemon as any)(filteredOwnedPokemon);
  };

  const renderNoPokemonOwned = () => {
    return (
      <div>
        <p> Oh la da la, Kamu tidak punya pokemon</p>
        <p>Go Catch Em</p>
      </div>
    );
  };

  return (
    <>
      {ownedPokemon &&
        ownedPokemon.length > 0 &&
        (ownedPokemon as any).map((pokemon, index) => {
          return (
            <Card key={pokemon.name + index} hoverable={false}>
              <ImageBox>
                <img src={pokemon.image} alt="" />
              </ImageBox>
              <div>
                <NameBox>
                  <div>
                    <h3>Name</h3>
                    <p>{pokemon.name}</p>
                  </div>
                  <div>
                    <h3>Nickname</h3>
                    <p>{pokemon.nickName}</p>
                  </div>
                </NameBox>
                <div>
                  <Button
                    isDanger
                    onClick={() => handleRelease(pokemon.nickName)}
                  >
                    release
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      {(!ownedPokemon || ownedPokemon.length === 0) && renderNoPokemonOwned()}
    </>
  );
};

export default Profile;
