type FormDataMethod = (...args: any[]) => any;

interface FormDataMockOverrides {
  append?: jest.Mock;
  delete?: jest.Mock;
  get?: jest.Mock;
  getAll?: jest.Mock;
  has?: jest.Mock;
  set?: jest.Mock;
  forEach?: jest.Mock;
}

export const createFormDataMock = (overrides: FormDataMockOverrides = {}) => {
  return {
    append: overrides.append || jest.fn(),
    delete: overrides.delete || jest.fn(),
    get: overrides.get || jest.fn(),
    getAll: overrides.getAll || jest.fn(),
    has: overrides.has || jest.fn(),
    set: overrides.set || jest.fn(),
    forEach: overrides.forEach || jest.fn(),
  } as unknown as FormData;
};
