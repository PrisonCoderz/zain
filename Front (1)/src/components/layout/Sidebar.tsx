// @ts-nocheck
//@ts-ignore
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signOut } from "next-auth/react"
import Router from 'next/router';
import { useRouter } from 'next/router';
const Sidebar = ({ children }) => {
const router = useRouter()
  const { data: session } = useSession()
 
  const [sidebarTop, setSidebarTop] = useState(0);
  const signout = () => {
    if (session) {
      signOut()
    }
    router.push('/');
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setSidebarTop(Math.max(0, 50 - window.scrollY));
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <Link href="/user" className='font-bold'>Users</Link>
          <li onClick={signout} className='cursor-pointer'>logout</li>
        </ul>
      </nav>
      <div className="container">
        <div className="sidebar" style={{ top: sidebarTop }}>
          <ul>
            <li><a href="#">User Authentication Module</a>
              <ul>
                <li><a href="/Roles">Roles & Permissions</a></li>
                <li><a href="/group1">Users & Group Management</a></li>
                <li><a href="/configurator">Configurator</a></li>
              </ul>
            </li>

            <li><a href="#">Facility Management Module</a>
              <ul>
                <li><a href="/teams">Management of Teams</a></li>
                <li><a href="/location"> Management of Location</a></li>
                <li><a href="/delete1">Create, modify, and delete teams and locations</a></li>
              </ul>
            </li>
            <li><a href="#">Option 3</a>
              <ul>
                <li><a href="#">Suboption 1</a></li>
                <li><a href="#">Suboption 2</a></li>
                <li><a href="#">Suboption 3</a></li>
              </ul>
            </li>
            <li><a href="#">Option 4</a>
              <ul>
                <li><a href="#">Suboption 1</a></li>
                <li><a href="#">Suboption 2</a></li>
                <li><a href="#">Suboption 3</a></li>
              </ul>
            </li>
            <li><a href="#">Option 5</a>
              <ul>
                <li><a href="#">Suboption 1</a></li>
                <li><a href="#">Suboption 2</a></li>
                <li><a href="#">Suboption 3</a></li>
              </ul>
            </li>
            <li><a href="#">Option 6</a>
              <ul>
                <li><a href="#">Suboption 1</a></li>
                <li><a href="#">Suboption 2</a></li>
                <li><a href="#">Suboption 3</a></li>
              </ul>
            </li>
            <li><a href="#">Data Entry</a>
              <ul>
                <li> <Link href={"/data-entry/DataForm"}>Form</Link></li>
                <li><Link href={"/data-entry"}>List</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="content">
          <h1>Computerized Machine Repair and
            Maintenance Management System
            (CMRMMS)
          </h1>
          <p> A Computerized Machine Repair and Maintenance Management System (CMRMMS)
            is to be developed with the aim of providing efficient and streamlined maintenance management for organizations. The solution is designed to automate and organize various
            maintenance tasks and processes, including work order management, equipment management, and inventory management. The system is expected to reduce manual effort,
            improve accuracy, and increase visibility into maintenance operations.
          </p>
          {children}
        </div>

      </div>
      <style jsx>{`
        .navbar {
          background-color: #333;
          color: #fff;
          display: flex;
          justify-content: space-between;
          padding: 10px 20px;
        }
        .navbar ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .navbar li {
          margin: 0 10px;
        }
        .navbar a {
          color: #fff;
          text-decoration: none;
          font-weight: bold;
        }
        .container {
          display: flex;
          margin-top: 80px;
          margin-bottom: 50px;
        }
        .sidebar {
          background-color: #eee;
          padding: 20px;
          position: sticky;
          top: 50px;
          width: 200px;
        }
        .sidebar ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .sidebar li {
          margin: 10px 0;
        }
        .sidebar a {
          color: #333;
          text-decoration: none;
        }
        .sidebar ul ul {
          display: none;
        }
        .sidebar ul li:hover > ul {
          display: block;
        }
        .sidebar ul li a {
          display: block;
          font-size: 18px;
          font-weight: bold;
        }
        .sidebar ul li ul li a {
          font-size: 16px;
          font-weight: normal;
        }
        .content {
          flex: 1;
          margin-left: 20px;
        }
        h1 {
          font-size: 36px;
          margin-bottom: 20px;
        }
        p {
          line-height: 1.5;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default Sidebar
