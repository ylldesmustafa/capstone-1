
const SearchBar = () => (
  <form action="/" method="get">
      <label htmlFor="header-search">
          <span className="visually-hidden">Search Products</span>
      </label>
      <input
          type="text"
          id="header-search"
          placeholder="Search Products"
          name="s" 
      />
      <button type="submit">Search</button>
  </form>
);

const searchList = [
  { id: '1', name: 'Three Tier Butterfly Cat Toy' },
  { id: '2', name: 'Bird Teaser' },
  { id: '3', name: 'Catnip Mice' },
  { id: '4', name: 'Cat Scratcher' },
  { id: '5', name: 'Catnip Sushi Toy' },
  { id: '6', name: 'Cat Tunnel Variety Pack' },
  { id: '7', name: 'Spin Around Electronic Feather Toy' },
  { id: '8', name: 'Catnip Tea Bags' },
  { id: '9', name: 'Avocado Toy with Catnip' },
  { id: '10', name: 'Chew Wheel Dental Toy' },
];

export default SearchBar;