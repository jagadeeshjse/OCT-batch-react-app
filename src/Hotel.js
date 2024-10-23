import PropTypes from 'prop-types';
const Hotel = ({ name, image }) => {
  //destructuring - object(es6 feature)

  //   const { name, price } = props;

  //   console.log('props data', name);
  const handleClick = () => {
    console.log('im cliicked');
  };

  return (
    <div className="hotel">
      <img src={image} alt="" />
      <p>name: {name}</p>
      <p>price: {name}/- </p>
      <button onClick={handleClick}>click More!</button>
    </div>
  );
};

Hotel.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
};

Hotel.defaultProps = {
  name: 'default name',
};

export default Hotel;
