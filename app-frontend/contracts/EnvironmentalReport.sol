pragma solidity ^0.4.18;
contract EnvironmentalReport{
  string summary;
  address reporter;
  address agent;
  uint256 reward;
  string elements_id;

  function EnvironmentalReport() public{
    reporter = msg.sender;
    summary = "";
  }
    function EnvironmentalReport(string text) public{
    reporter =  msg.sender;
    summary = text;
  }

function EnvironmentalReport(string text) public{
    reporter =  msg.sender;
    summary = text;
  }
function asignReport(address new_agent) public{
    agent = new_agent;
    
  }


}
 
