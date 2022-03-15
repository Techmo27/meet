import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  const updateEvents = jest.fn()
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={updateEvents}
      numberOfEvents={32} />);
  });

  test("render text input", () => {
    expect(NumberOfEventsWrapper.find(".numberOfEvents")).toHaveLength(1);
  });

  test("render text input correctly", () => {
    const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    expect(
      NumberOfEventsWrapper.find(".number-of-events").prop("value")
    ).toBe(numberOfEvents);
  });

  test("change state when input changes", () => {
    const eventObject = { target: { value: 32 } };
    NumberOfEventsWrapper.find(".number-of-events").simulate(
      "change",
      eventObject
    );
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
  });

  test("show number of events input label", () => {
    expect(NumberOfEventsWrapper.find(".numberOfEvents label")).toHaveLength(1);
  });

});