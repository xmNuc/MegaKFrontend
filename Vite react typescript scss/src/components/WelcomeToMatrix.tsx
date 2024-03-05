export const WelcomeToTheMatrix = () => {
  const names = [
    'Alice Smith',
    'Bob Johnson',
    'Charlie Brown',
    'Daisy Miller',
    'Edward Davis',
    'Frank Wilson',
    'Grace Lee',
    'Henry Taylor',
    'Ivy Anderson',
    'Jack White',
    'Katie Martinez',
    'Leo Harris',
  ];

  return (
    <div className="welcome-to-matrix">
      <div className="matrix-rain">
        <div className="matrix-container">
          {names.map((name, index) => (
            <div key={index} className="matrix-row">
              <span className="matrix-char">{name}</span>
            </div>
          ))}
        </div>
        <div className="rain-effect">
          {[...Array(50)].map((_, index) => (
            <div key={index} className="rain-drop"></div>
          ))}
        </div>
      </div>
    </div>
  );
};
