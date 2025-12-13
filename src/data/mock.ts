import { Compte } from "../app/models/compte.model";

const COMPTES:Compte[]=[
{
    id:1,
    mumero:"FR76 1234 5678 9012 3456 7890 123",
    solde:1500.75,
    titulaire:"Alice Dupont",
    type:"Courant",
    createAt:new Date('2023-01-15'),
     statut:"Actif"
},
{
    id:2,
    mumero:"FR98 2345 6789 0123 4567 8901 234",
    solde:2500.00,
    titulaire:"Bob Martin",
    type:"Épargne",
    createAt:new Date('2022-11-20'),
    statut:"Bloque",
    duree:"10"
},
{
    id:3,
    mumero:"FR12 3456 7890 1234 5678 9012 345",
    solde:500.50,
    titulaire:"Claire Bernard", 
    type:"Courant",
    createAt:new Date('2023-03-10'),
     statut:"Inactif"
},
{
    id:4,
    mumero:"FR34 4567 8901 2345 6789 0123 456",
    solde:3200.00,
    titulaire:"David Leroy",
    type:"Épargne",
    createAt:new Date('2021-07-05'),
     statut:"Actif"
},
{
    id:5,
    mumero:"FR56 5678 9012 3456 7890 1234 567",
    solde:750.25,   
    titulaire:"Eva Moreau",
    type:"Courant",
    createAt:new Date('2022-05-18'),
     statut:"Actif"
}                            
];
export { COMPTES };