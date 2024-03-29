import Loader from 'react-js-loader';

export const AppLoader = () => {
  return (
    <div
      className="Loader"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
      }}
    >
      <Loader
        type="spinner-cub"
        bgColor="transparent"
        color="black"
        size={100}
      />
    </div>
  );
};
