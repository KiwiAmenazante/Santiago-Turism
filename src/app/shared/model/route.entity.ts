export class Route {

  private id: number;
  private hour: string;
  private description: string;
  constructor(route:{id?: number, hour?: string, description?: string}){

    this.id = route.id || 0;
    this.hour = route.hour || '';
    this.description = route.description || '';
  }
}



