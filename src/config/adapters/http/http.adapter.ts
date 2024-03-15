

export abstract class HttpAdapter {

    abstract get<T>( url: string, options?: Record<string, unknown> ): Promise<T>;
    
    /* versión más elemental en donde es muy generico: */
    //abstract get<T>( url: string, options: any ): Promise<any>;

}

