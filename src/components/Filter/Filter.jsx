export const Filter = ({ filter, handleChange }) => {
  return (
    <>
      <label htmlFor="findByName">Name:</label>
      <input
        value={filter}
        onChange={handleChange}
        id="findByName"
        aria-describedby="findByNameHelp"
        type="text"
        name="filter"
        required
      />
      <div id="findByNameHelp">Quick search</div>
    </>
  );
};
