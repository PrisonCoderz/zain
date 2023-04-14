import React from 'react';
import Head from 'next/head';

const WelcomePage = () => {
  return (
    <>
      <Head>
        <title>Welcome to My Website!</title>
      </Head>
      <div className="container">
        <div className="content">
          <h1>Welcome to My Website!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis semper nisi. Nunc congue augue id libero luctus consequat. Fusce vel velit vitae nulla suscipit sagittis. Phasellus eleifend porta ex, id interdum erat.</p>
          <p>Quisque et metus vel tortor malesuada blandit. Sed at purus sed nibh faucibus bibendum. Nulla rutrum laoreet arcu, sed tristique risus tincidunt a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam vehicula urna at ipsum hendrerit, auctor rutrum purus interdum. Duis pharetra augue sit amet ex suscipit, at gravida ipsum tempor.</p>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          max-width: 1000px;
          margin: 0 auto;
        }
        .content {
          width: 100%;
          padding: 20px;
          background-color: #fff;
        }
        h1 {
          margin-top: 10;
        }
        p {
          margin-bottom: 1.5em;
        }
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default WelcomePage;
