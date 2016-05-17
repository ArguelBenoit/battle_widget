import json_data from '../data.json';
export const DATA = 'DATA';

export default function data() {
  return {
    type: DATA,
    data: json_data
  };
}