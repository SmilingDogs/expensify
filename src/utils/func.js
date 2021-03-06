//*Get visible expenses

import moment from "moment";

const getVisibleExpenses = (expenses, filters) => {
  const { text, sortBy, startDate, endDate } = filters;
  return expenses
    .filter((exp) => {
      const createdAtMoment = moment(exp.createdAt)
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
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
