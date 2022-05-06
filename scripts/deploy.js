async function main() {
    const MyNFT = await ethers.getContractFactory("MyNFT");
  
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy();
    console.log("Contract deployed to address:", myNFT.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  //0x15160A5cc2d4d373B7Bb374C2B6888Ac75FAA8B1   1st
  //0xe19274B8F6c9584c32484040b9A4AF80548862b2 2nd n final attempt