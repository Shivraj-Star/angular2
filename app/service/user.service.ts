import {Injectable} from 'Angular2/core';
@injectable();
export class authService {
  authList = [
    { name: 'Kaushal Rajkotia', contact: 9325145236, city: 'Mumbai', email: 'padwal.shivraj@gmail.com' },
    { name: 'Viren Ajmera', contact: 7588937393, city: 'Pune', email: 'Viru@gmail.com' },
    { name: 'shivraj padwal', contact: 9745937393, city: 'Mumbai', email: 'padwal.shivraj@gmail.com' },
    { name: 'Prasad Bhosale', contact: 8888937393, city: 'Kolhapur', email: 'prasad@gmail.com' }
  ];
  userCity = ['Aurangabad', 'Badalapur', 'Osmanabad', 'Pune', 'Mumbai', 'Barshi', 'Kolhapur']
}
