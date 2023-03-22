import React, { useContext, useState } from "react";
const EmailContext = React.createContext();

// export default StudentContext;

function EmailContextP({ children }) {
  const [emails, setemails] = useState(
    JSON.parse(localStorage.getItem("student")) || {}
  );
  return (
    <EmailContext.Provider value={{ emails, setemails }}>
      {children}
    </EmailContext.Provider>
  );
}

export default EmailContextP;

function EmailContextC() {
  const { emails, setemails } = useContext(EmailContext);
  return { emails, setemails };
}

export { EmailContextC };
