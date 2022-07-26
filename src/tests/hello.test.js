import React from 'react';

// eslint-disable-next-line no-undef
describe('JSX', () => {
  // eslint-disable-next-line no-undef
  it('calls React.createElement', () => {
    // eslint-disable-next-line no-undef
    const createElementSpy = jest.spyOn(React, 'createElement'); // 1
      // eslint-disable-next-line react/jsx-filename-extension
      <h1>Hello, JSX!</h1>;
      // eslint-disable-next-line no-undef
      expect(createElementSpy).toHaveBeenCalledWith('h1', null, 'Hello, JSX!'); // 2
  });
});
