//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

contract FSAnnounce {
    //user address => token address => post
    mapping(address => mapping(address => Post[])) posts;

    struct Post{
        bytes encryptedFile;
        bytes key;
    }

    function newPost(address tokenAddress, bytes calldata file, bytes calldata key) external {
        posts[msg.sender][tokenAddress].push(Post(file, key));
    }

    function removeLastPost(address tokenAddress) external {
        posts[msg.sender][tokenAddress].pop();
    }

    function getPostsCount(address owner, address tokenAddress) public view returns(uint){
        return posts[owner][tokenAddress].length;
    }

    function getPostsCountBulk(address[] calldata owners, address[] calldata tokenAddresses) external view returns(uint32[] memory result){
        require(owners.length == tokenAddresses.length, "arrays are different length");

        result = new uint32[](owners.length);
        for (uint i = 0; i < owners.length; i++) {
            result[i] = uint32(getPostsCount(owners[i], tokenAddresses[i]));
        }
    }

    function getPostByIndex(address owner, address tokenAddress, uint index) external view returns(bytes memory encryptedFile, bytes memory key){
        Post storage post = posts[owner][tokenAddress][index];
        encryptedFile = post.encryptedFile;
        key = post.key;
    }
}
