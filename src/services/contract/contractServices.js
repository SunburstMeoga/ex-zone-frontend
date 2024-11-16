import { ethers } from 'ethers';

class ContractService {
    constructor(provider, contractABI, contractAddress) {
        this.provider = new ethers.BrowserProvider(provider);
        this.signer = this.provider.getSigner();
        this.contract = new ethers.Contract(contractAddress, contractABI, this.signer);

    }

    // 获取当前连接的钱包账户地址
    async getAccount() {
        const accounts = await this.provider.listAccounts();
        return accounts[0];
    }

    // 调用合约的只读方法
    async callMethod(methodName, ...args) {
        console.log(methodName, ...args);
        try {
            const result = await this.contract[methodName](...args);
            return result;
        } catch (error) {
            console.error("callMethod Error:", error);
            throw error;
        }
    }

    async sendMethod(methodName, from, args = [], options = {}) {
        try {
            // 初始化签名器
            const signer = await this.provider.getSigner();
            if (!signer) {
                throw new Error("Signer not found. Please check if the provider is initialized correctly.");
            }

            // 连接签名器并初始化合约
            const contractWithSigner = this.contract.connect(signer);
            console.log("Signer:", signer);
            console.log("Contract With Signer:", contractWithSigner);
            // 检查合约方法是否存在
            if (typeof contractWithSigner[methodName] !== 'function') {
                throw new Error(`Method ${methodName} not found on contract.`);
            }

            // 调用合约方法
            const txResponse = await contractWithSigner[methodName](...args, options);
            console.log("Transaction Response:", txResponse);
            // 检查返回值是否为 TransactionResponse 对象
            if (!txResponse || typeof txResponse.wait !== 'function') {
                throw new Error("Invalid TransactionResponse, missing 'wait' method.");
            }

            // 等待交易确认
            const receipt = await txResponse.wait();
            return receipt;
        } catch (error) {
            console.error("sendMethod Error:", error);
            throw error;
        }
    }




}

export default ContractService;
