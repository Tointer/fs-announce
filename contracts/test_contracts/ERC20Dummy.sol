// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @dev dummy ERC20 contract with public mint function
 */
contract ERC20Dummy is ERC20 {
    constructor() ERC20("MyToken", "MTK") {}

    function mint(address to, uint256 amount) public returns (bool){
        _mint(to, amount);
        return true;
    }
}