import { render } from "@testing-library/react";
import Profile from "../pages/profile";
import PokemonContainer from "../containers/PokemonContainer/PokemonContainer";
import { ProfileLocators } from "./locators";

const AccountStateWrapper = ({ children }) => (
  <PokemonContainer.Provider>{children}</PokemonContainer.Provider>
);

describe("Profile", () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

  it("to not have catch any pokemon", async () => {
    const { getByTestId } = render(
      <AccountStateWrapper>
        <Profile />
      </AccountStateWrapper>
    );
    expect(getByTestId(ProfileLocators.noPokemon)).toBeInTheDocument();

    window.localStorage.setItem("ownedPokemon", "asdsad");
    window.localStorage.getItem("ownedPokemon");
  });
});