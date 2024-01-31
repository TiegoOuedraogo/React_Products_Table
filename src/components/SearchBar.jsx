function SearchBar () {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <br />
      <label htmlFor="only-stock">
        <input type="checkbox" id="only-stock" />
        {" "}
        Only show products in stock
      </label>
    </form>
  )
}

export default SearchBar