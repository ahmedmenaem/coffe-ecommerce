import { Machine, IMachine } from '../models/machine/machine';
import { IPod, Pod } from '../models/pod/pod';

const machines: IMachine[] = [
    {
        waterLineCompitable: false,
        machineType: 'SMALL',
        machineModel: 'BASE'
    },
    {
        waterLineCompitable: false,
        machineType: 'SMALL',
        machineModel: 'PREMIUM'
    },
    {
        waterLineCompitable: true,
        machineType: 'SMALL',
        machineModel: 'DELUXE'
    },
    {
        waterLineCompitable: false,
        machineType: 'LARGE',
        machineModel: 'BASE'
    },
    {
        waterLineCompitable: true,
        machineType: 'LARGE',
        machineModel: 'PREMIUM'
    },
    {
        waterLineCompitable: true,
        machineType: 'LARGE',
        machineModel: 'DELUXE'
    },
    {
        waterLineCompitable: false,
        machineType: 'ESSPRESSO',
        machineModel: 'BASE'
    },
    {
        waterLineCompitable: false,
        machineType: 'ESSPRESSO',
        machineModel: 'PREMIUM'
    },
    {
        waterLineCompitable: true,
        machineType: 'ESSPRESSO',
        machineModel: 'DELUXE'
    },
];

const pods: IPod[] = [
    {
        cofferFlavour: 'VANILLA',
        packSize: 1,
        podType: 'SMALL'
    },
    {
        cofferFlavour: 'VANILLA',
        packSize: 3,
        podType: 'SMALL'
    },
    {
        cofferFlavour: 'CARAMEL',
        packSize: 1,
        podType: 'SMALL'
    },
    {
        cofferFlavour: 'PSL',
        packSize: 1,
        podType: 'SMALL'
    },
    {
        cofferFlavour: 'PSL',
        packSize: 3,
        podType: 'SMALL'
    },
    {
        cofferFlavour: 'MOCHA',
        packSize: 1,
        podType: 'SMALL'
    },
    {
        cofferFlavour: 'MOCHA',
        packSize: 3,
        podType: 'SMALL'
    },
    {
        cofferFlavour: 'HAZELNUT',
        packSize: 1,
        podType: 'SMALL'
    },
    {
        cofferFlavour: 'HAZELNUT',
        packSize: 3,
        podType: 'SMALL'
    },


    {
        cofferFlavour: 'VANILLA',
        packSize: 1,
        podType: 'LARGE'
    },
    {
        cofferFlavour: 'VANILLA',
        packSize: 3,
        podType: 'LARGE'
    },
    {
        cofferFlavour: 'CARAMEL',
        packSize: 1,
        podType: 'LARGE'
    },
    {
        cofferFlavour: 'PSL',
        packSize: 1,
        podType: 'LARGE'
    },
    {
        cofferFlavour: 'PSL',
        packSize: 3,
        podType: 'LARGE'
    },
    {
        cofferFlavour: 'MOCHA',
        packSize: 1,
        podType: 'LARGE'
    },
    {
        cofferFlavour: 'MOCHA',
        packSize: 3,
        podType: 'LARGE'
    },
    {
        cofferFlavour: 'HAZELNUT',
        packSize: 1,
        podType: 'LARGE'
    },
    {
        cofferFlavour: 'HAZELNUT',
        packSize: 3,
        podType: 'LARGE'
    },

    {
        cofferFlavour: 'VANILLA',
        packSize: 1,
        podType: 'ESSPRESSO'
    },
    {
        cofferFlavour: 'VANILLA',
        packSize: 3,
        podType: 'ESSPRESSO'
    },
    {
        cofferFlavour: 'CARAMEL',
        packSize: 1,
        podType: 'ESSPRESSO'
    },
    {
        cofferFlavour: 'PSL',
        packSize: 1,
        podType: 'ESSPRESSO'
    },
    {
        cofferFlavour: 'PSL',
        packSize: 3,
        podType: 'ESSPRESSO'
    },
    {
        cofferFlavour: 'MOCHA',
        packSize: 1,
        podType: 'ESSPRESSO'
    },
    {
        cofferFlavour: 'MOCHA',
        packSize: 3,
        podType: 'ESSPRESSO'
    },
    {
        cofferFlavour: 'HAZELNUT',
        packSize: 1,
        podType: 'ESSPRESSO'
    },
    {
        cofferFlavour: 'HAZELNUT',
        packSize: 3,
        podType: 'ESSPRESSO'
    },
];


const initPods = async () => {
    pods.forEach(async pod => {
        let newPod = new Pod(pod);
        await newPod.save();
    });
}

const initMachines = async () => {
    machines.forEach(async machine => {
        let newMachine = new Machine(machine);
        await newMachine.save();
    });
}

export const initDB = async () => {
    const machinesSize = await Machine.countDocuments({});
    if (machinesSize <= 0)
        initMachines();
    else 
        console.log('machines data has been initialized!');

    const podsSize = await Pod.countDocuments({});
    if(podsSize <= 0)
        initPods();
    else
        console.log('pods data has been initialized!');
}