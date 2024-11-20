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
    async callViewMethod(methodName, ...args) {
        try {
            // 使用 Provider 而不是 Signer 调用合约方法
            const contractWithProvider = this.contract.connect(this.provider);

            if (typeof contractWithProvider[methodName] !== 'function') {
                throw new Error(`Method ${methodName} not found on contract.`);
            }

            const result = await contractWithProvider[methodName](...args);
            // console.log(`Result from ${methodName}:`, result);
            return result;
        } catch (error) {
            console.error(`callViewMethod Error: ${methodName}`, error);
            throw error;
        }
    }


    async sendMethod(methodName, from, args = [], options = {}) {
        try {
            const signer = await this.provider.getSigner(from);
            const contractWithSigner = this.contract.connect(signer);

            // 调用合约方法并发送交易
            const txResponse = await contractWithSigner[methodName](...args, options);
            // console.log("Transaction Response:", txResponse);

            // 检查返回值，确保是有效的 TransactionResponse 对象
            if (!txResponse || typeof txResponse.wait !== 'function') {
                throw new Error("Invalid TransactionResponse, missing 'wait' method");
            }

            // 等待交易确认
            const receipt = await txResponse.wait();
            // console.log("Transaction Mined:", receipt);

            return receipt;
        } catch (error) {
            console.error("sendMethod Error:", error);
            throw error;
        }
    }

    async getSlot0() {
        try {
            const result = await this.callViewMethod("slot0");
            console.log("Slot0 Data:", result);
            return result;
        } catch (error) {
            console.error("getSlot0 Error:", error);
            throw error;
        }
    }


}

export default ContractService;
