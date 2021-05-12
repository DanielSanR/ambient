import  {Injectable} from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
=======
import { HttpClient, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
>>>>>>> 141f701a40a5a11503bed0cf75a1770645f472d3
import { Observable } from 'rxjs-compat/Observable';
import { Institucion } from '@core/models/institucion';
import { catchError } from 'rxjs/operators'; 
import { environment } from '../../../environments/environment';
@Injectable()
export class InstitucionesService{

	public url: string;
 

	constructor( private _http: HttpClient ) {
		this.url = environment.BASE_URL+'institucionTemporal';
	}

	
	getInstitucion():Observable<Institucion[]> {
		return (this._http.get<Institucion[]>(this.url));
	}


}






