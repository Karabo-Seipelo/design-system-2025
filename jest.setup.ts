import "@testing-library/jest-dom";

if (!HTMLFormElement.prototype.requestSubmit) {
  HTMLFormElement.prototype.requestSubmit = function (submitter?: HTMLElement) {
    console.log("Mock requestSubmit called");
    if (submitter) {
      submitter.click();
    } else {
      this.submit();
    }
  };
}
