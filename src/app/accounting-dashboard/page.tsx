import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'F & B | Accounting Dashboard',
    description: '',
}

const AccountingDashboard = async () => {
    const res = await fetch("http://localhost:5000/dashboard/view-dashboard");
    const data = await res.json();
    return (
        <div>
            <div>
                {
                    data.map(({ id, accountNumber, balance, accountReceivable, accountPayable, lastTransaction }) =>
                        <div key={id} className='w-full mx-auto'>
                            <h2 className="text-center text-4xl font-bold text-black my-8">My Dashboard</h2>
                            <div className='flex justify-center gap-14'>
                                <div className="card w-96 bg-neutral text-neutral-content">
                                    <div className="card-body items-center text-center">
                                        <p>Account Number: {accountNumber}</p>
                                    </div>
                                </div>
                                <div className="card w-96 bg-neutral text-neutral-content">
                                    <div className="card-body items-center text-center">
                                        <h3>Current Balance: {balance}K</h3>
                                        <h3>Account Receivable: {accountReceivable}K</h3>
                                        <h3>Account Payable: {accountPayable}K</h3>
                                    </div>
                                </div>
                                <div className="card w-96 bg-neutral text-neutral-content">
                                    <div className="card-body items-center text-center">
                                        <p>Last Transaction: {lastTransaction}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AccountingDashboard;