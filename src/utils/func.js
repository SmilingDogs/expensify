//*Get visible expenses

const getVisibleExpenses = (expenses, filters) => {
  const { text, sortBy, startDate, endDate } = filters;
  return expenses
    .filter((exp) => {
      const startDateMatch =  typeof startDate !== "number" || exp.createdAt >= startDate;
      const endDateMatch = typeof endDate !== "number" || exp.createdAt <= endDate;
      const textMatch = exp.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
      return false;
    });
};

export default getVisibleExpenses;
