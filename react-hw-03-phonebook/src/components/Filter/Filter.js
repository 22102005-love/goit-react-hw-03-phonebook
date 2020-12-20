import s from './Filter.module.css';
const Filter = ({ filter, onChange }) => {
  return (
    <label className={s.filter}>
      Find contact by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
        placeholder="Enter name for search"
      ></input>
    </label>
  );
};
export default Filter;
