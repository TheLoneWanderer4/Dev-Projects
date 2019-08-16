const visabilityFilters = {
  all: "ALL",
  done: "DONE",
  todo: "TODO"
};

const filter = (state = visabilityFilters.all, action) => {
  switch (action.type) {
    case visabilityFilters.all:
      return visabilityFilters.all;
    case visabilityFilters.done:
      return visabilityFilters.done;
    case visabilityFilters.todo:
      return visabilityFilters.todo;
  }
};

export default filter;
