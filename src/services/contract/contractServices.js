import { ethers } from 'ethers';

class ContractService {
    constructor(provider, contractABI, contractAddress) {
        // 在 ethers v5 中, BrowserProvider 已经被移除, 需要直接使用 Web3Provider
        this.provider = new ethers.providers.Web3Provider(provider); // 使用 Web3Provider
        this.signer = this.provider.getSigner(); // 获取签名者
        this.contract = new ethers.Contract(contractAddress, contractABI, this.signer); // 创建合约实例
    }

    // 获取当前连接的钱包账户地址
    async getAccount() {
        const accounts = await this.provider.listAccounts(); // 获取连接的账户列表
        return accounts[0]; // 返回第一个账户
    }

    // 调用合约的只读方法（查询数据）
    async callViewMethod(functionName, ...args) {
        try {
            const result = await this.contract[functionName](...args); // 动态调用合约方法
            return result; // 返回结果
        } catch (error) {
            console.error(`Error calling contract method ${functionName}:`, error);
            throw error;
        }
    }

    // 调用合约的写操作（发送交易）
    async sendMethod(functionName, fromAddress, ...args) {
        try {
            const tx = await this.contract.connect(this.provider.getSigner(fromAddress))[functionName](...args);
            const receipt = await tx.wait(); // 等待交易被矿工打包
            return receipt; // 返回交易回执
        } catch (error) {
            console.error(`Error sending transaction for ${functionName}:`, error);
            throw error;
        }
    }
}

export default ContractService;
