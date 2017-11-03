pragma solidity ^0.4.7;

contract SimpleStorage {
         string public storedData;
         function SimpleStorage() {
                      storedData = "hello world";
         }
         function set(string x) {
                      storedData = x;
         }
         function get() constant returns (string x) {
                     return storedData;
         }

 }
