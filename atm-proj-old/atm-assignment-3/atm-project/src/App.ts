import * as express from 'express';
import {Atm} from './atm/atm';

export class App {
    public webservice : any;
    private atm : Atm;

    constructor(){
        this.webservice = express();
        this.atm = new Atm();
        this.mountAtmRoutes();
    }

    private mountAtmRoutes(){
        const atmLive         = express.Router();
        const atmWithdraw     = express.Router();
        const atmDeposit      = express.Router();
        const atmBalance      = express.Router();
        const atmTransactions = express.Router();

        //routes
        atmLive.get("/atm", (req, res) => {
            res.json({
                status: 0,
                message: 'OK'
            });
        });

        atmBalance.get('/atm/:acc/', (req, res) => {
            res.json({
                accountNumber : req.params.acc,
                currentBalance : this.atm.getCurrentBalance(req.params.acc)
            });
        });

        atmTransactions.get('/atm/transactions/:acc/', (req, res) => {
            res.json({
                accountNumber : req.params.acc,
                transactions : this.atm.getLastOperations(req.params.acc).transactions
            });
        });

        atmDeposit.get('/atm/deposit/:acc/amount/:amount', (req, res) => {
            res.json({
                accountNumber : req.params.acc,
                currentBalance : this.atm.deposit(req.params.acc, parseFloat(req.params.amount))
            });
        });

        atmWithdraw.get('/atm/withdraw/:acc/amount/:amount', (req, res) => {
            res.json({
                accountNumber : req.params.acc,
                currentBalance : this.atm.withdraw(req.params.acc, parseFloat(req.params.amount))
            });
        });

        this.webservice.use(atmLive);
        this.webservice.use(atmBalance);
        this.webservice.use(atmTransactions);
        this.webservice.use(atmDeposit);
        this.webservice.use(atmWithdraw);

    }
}

export default new App().webservice;