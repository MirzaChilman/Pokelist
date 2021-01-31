import { renderHook, act } from "@testing-library/react-hooks";
import { render } from "@testing-library/react";
import App from "../pages/index";
import PokemonContainer from "../containers/PokemonContainer/PokemonContainer";

const AccountStateWrapper = ({ children }) => (
  <PokemonContainer.Provider>{children}</PokemonContainer.Provider>
);

describe("App", () => {
  it("Renders app with loading state and result on fetch", async () => {
    const { result } = renderHook(() => PokemonContainer.useContainer(), {
      wrapper: AccountStateWrapper,
    });
    const { getByText, findAllByTestId } = render(
      <AccountStateWrapper>
        <App />
      </AccountStateWrapper>
    );
    expect(getByText(/Loading.../i)).toBeInTheDocument();

    await act(async () => {
      await result.current.fetchPokemon();
    });

    expect(result.current.pokemons.results).toBeTruthy();
    expect(await findAllByTestId(/pokemonName:*/i)).toBeTruthy()
  });
});
