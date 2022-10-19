import React from "react";
import Header from "./Header";

const Page = ({page, children, wantRemove}) => {
  return (
    <div className="container">
      <Header />

      {/* Beginning of Navigation section*/}
      <p className="navigate">
        Home <span>&gt;</span>
        <span> {page}</span>
      </p>
      {/*End of Navigation section*/}

      <main className={page}>
        <h1>{page}</h1>
        {wantRemove && (
        <div className="mobile-remove">
          <p className="item-count">4 items</p>
          <p className="remove-all">Remove all</p>
        </div>)}
        {children}
      </main>
    </div>
  );
};

export default Page;
