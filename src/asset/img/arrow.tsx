const ArrowIcon = () => {
  const icon = () => {
    return (
      <svg
        width="99"
        height="24"
        viewBox="0 0 99 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="98.5155"
          y="38.69482"
          width="5"
          height="62"
          transform="rotate(90.2283 98.5155 9.69482)"
          fill="#EB4970"
        />
        <path
          d="M18.4711 20.6738L7.38076 11.832L18.5412 3.07894L15.1269 0.362818L0.506323 11.8047L15.0353 23.3626L18.4711 20.6738Z"
          fill="#EB4970"
        />
      </svg>
    );
  };
  return <>{icon()}</>;
};

export default ArrowIcon;
