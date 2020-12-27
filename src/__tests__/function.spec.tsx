import * as React from 'react';
import { render } from '@testing-library/react';
import ExampleComponent from "../index";

test("create a new hello", () => {

    const document = render(<ExampleComponent text={"World"}/>);

    const textEl = document.getByRole("mainContent");

    expect(textEl.textContent).toBe("Hello World");

    expect(true).toBe(true);
});

