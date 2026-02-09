export default function Spinner() {
  return (
    <>
      <style>
        {`
          @keyframes loading {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <div
          style={{
            width: '50px',
            height: '50px',
            border: 'calc(50px/5) solid #DDDDDD',
            borderTopColor: '#00BFFF',
            borderRadius: '50%',
            boxSizing: 'border-box',
            animation: 'loading 0.75s ease infinite',
          }}
        />
      </div>
    </>
  );
}
