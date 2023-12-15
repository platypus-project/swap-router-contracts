import { Deployer, Reporter } from '@solarity/hardhat-migrate'

import { ethers } from 'ethers'

import { SwapRouter02__factory } from '../typechain';

export = async (deployer: Deployer) => {
  const v2CoreFactoryAddress = process.env.V2_FACTORY_ADDRESS || ethers.constants.AddressZero
  const weth9Address = process.env.WETH9_ADDRESS!
  const v3CoreFactoryAddress = process.env.V3_FACTORY_ADDRESS!
  const nonFungibleTokenPositionManagerAddress = process.env.NONFUNGIBLE_TOKEN_POSITION_MANAGER_ADDRESS!

  const swapRouter02 = await deployer.deploy(SwapRouter02__factory, [ v2CoreFactoryAddress, v3CoreFactoryAddress, nonFungibleTokenPositionManagerAddress, weth9Address ])

  Reporter.reportContracts(['SwapRouter02', swapRouter02.address])
};
