const connection = require('../database/connection');

module.exports = {
async index(request,response) {
    const {page = 1} = request.query;
    const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', "=", "incidents.ong_id")
        .limit(5)
        .offset((page - 1) * 5) // a partir do limite de págs conta 5 por paginação
        .select([
            'incidents.*',
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp',
            'ongs.city', 
            'ongs.uf'
        ]);
        response.header('X-Total-Count', count['count(*)']);

    return response.json(incidents);
},

    async create(request, response) {
        const { title, description, value} = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({id});

    },
    async delete(request, response){
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        
        if(incidents.ong_id != ong_id){
            return response.status(401).json({erro: 'Operation not permitted.'});
            //401 -> erro de não permissão
        }

        await connection('incidents').where('id', id).delete();


        return response.status(204).send();
        //204 -> sem conteudo
    }
}