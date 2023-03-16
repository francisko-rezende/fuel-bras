import { render, screen } from "@testing-library/react";
import { describe, vi } from "vitest";
import { Main } from "./Main";
import userEvent from "@testing-library/user-event";

vi.mock("@tanstack/react-query", () => ({
  useMutation: vi.fn(),
  QueryClient: vi.fn(),
}));

describe("Main.tsx", () => {
  it("should render properly", () => {
    render(<Main />);
    const elements = [
      screen.getByRole("heading", { name: /novo cálculo/i }),
      screen.getByRole("textbox", { name: /placa/i }),
      screen.getByRole("textbox", { name: /modelo/i }),
      screen.getByRole("spinbutton", {
        name: /capacidade do tanque \(litros\)/i,
      }),
      screen.getByRole("spinbutton", { name: /carga máxima \(toneladas\)/i }),
      screen.getByRole("spinbutton", {
        name: /consumo médio \(litros por 100 quilômetros\)/i,
      }),
      screen.getByRole("spinbutton", {
        name: /distância percorrida \(quilômetros\)/i,
      }),
      screen.getByRole("button", { name: /calcular/i }),
    ];

    elements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });

  it("should display errors when needed submitting with empty required fields or number fields are set to 0/when the user clicks on the button without modifying the form", async () => {
    render(<Main />);
    const button = screen.getByRole("button", { name: /calcular/i });
    await userEvent.click(button);
    const notPositiveNumberError = screen.getAllByText(
      /Utilize apenas número positivos/i,
    );
    expect(notPositiveNumberError).toHaveLength(4);
    const requiredFieldError = screen.getAllByText(/Campo obrigatório/i);
    expect(requiredFieldError).toHaveLength(2);
  });

  it("should display an error if the license plate is invalid", async () => {
    render(<Main />);
    const licensePlateField = screen.getByRole("textbox", { name: /placa/i });
    await userEvent.clear(licensePlateField);
    await userEvent.type(licensePlateField, "Placa inválida");

    const submitButton = screen.getByRole("button", { name: /calcular/i });
    await userEvent.click(submitButton);
    const invalidLicensePlateError = screen.getByText(/Placa inválida/i);
    expect(invalidLicensePlateError).toBeInTheDocument();
  });

  it("should calculate the average fuel consumption per tonne properly", async () => {
    render(<Main />);
    const licensePlateField = screen.getByRole("textbox", { name: /placa/i });
    await userEvent.clear(licensePlateField);
    await userEvent.type(licensePlateField, "AAA0A00");

    const modelField = screen.getByRole("textbox", { name: /modelo/i });
    await userEvent.clear(modelField);
    await userEvent.type(modelField, "Modelo");

    const fuelCapacityField = screen.getByRole("spinbutton", {
      name: /capacidade do tanque \(litros\)/i,
    });
    await userEvent.clear(fuelCapacityField);
    await userEvent.type(fuelCapacityField, "1");

    const maxLoadField = screen.getByRole("spinbutton", {
      name: /carga máxima \(toneladas\)/i,
    });
    await userEvent.clear(maxLoadField);
    await userEvent.type(maxLoadField, "10");

    const averageFuelConsumptionField = screen.getByRole("spinbutton", {
      name: /consumo médio \(litros por 100 quilômetros\)/i,
    });
    await userEvent.clear(averageFuelConsumptionField);
    await userEvent.type(averageFuelConsumptionField, "175");

    const travelledDistanceField = screen.getByRole("spinbutton", {
      name: /distância percorrida \(quilômetros\)/i,
    });
    await userEvent.clear(travelledDistanceField);
    await userEvent.type(travelledDistanceField, "1000");

    const submitButton = screen.getByRole("button", { name: /calcular/i });
    await userEvent.click(submitButton);

    const resultHeading = screen.getByRole("heading", {
      name: /consumo médio • aaa0a00/i,
    });
    const resultValue = screen.getByText(/0,175/i);
    const resultUnit = screen.getByText(/litros \/ toneladas/i);

    [resultHeading, resultValue, resultUnit].forEach((resultPiece) => {
      expect(resultPiece).toBeInTheDocument();
    });
  });
});
