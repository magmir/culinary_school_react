export const FETCH_COURSES = 'Fetching culinary courses';

export function fetchCourses() {
  const courses = [
    { id: 'c1', name: 'Bakery course', description: 'sfsf', duration: '5 hours', price: '150£' },
    { id: 'c2', name: 'Italian pasta', description: 'sth', duration: '2 hours', price: '50£' },
    { id: 'c3', name: 'French pastry', description: 'sth', duration: '1 day', price: '300£' },
    { id: 'c4', name: 'Meat cooking', description: 'sth', duration: '2 days', price: '600£' }
  ];
  return {
    type: FETCH_COURSES,
    payload: courses,
  }
}
