<template>
    <div class="row">
        <div class="col-12 mb-2">
            <!-- llamamos al componente para Crear   -->
            <router-link :to='{name:"crearUsuario"}' class="btn btn-success"><i class="fas fa-plus-circle"></i></router-link>
        </div>
        <div class="col-12">             
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead class="bg-primary text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="usuario in usuarios" :key="usuario.id">
                                    <td>{{usuario.id }}</td>
                                    <td>{{usuario.nombre }}</td>
                                    <td>{{usuario.apellido }}</td>
                                    <td>
                                        <!-- llamamos al componente para Editar     -->
                                        <router-link :to='{name:"editarUsuario",params:{id:usuario.id}}' class="btn btn-info"><i class="fas fa-edit"></i></router-link>
                                        <a type="button" @click="borrarUsuario(usuario.id)" class="btn btn-danger"><i class="fas fa-trash"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>                          
        </div>
    </div>
</template>

<script>
export default {
    name:"usuarios",
    data(){
        return {
            usuarios:[]
        }
    },
    mounted(){
        this.mostrarUsuarios()
    },
    methods:{
        async mostrarUsuarios(){
            await this.axios.get('/api/usuario').then(response=>{
                this.usuarios = response.data
            }).catch(error=>{
                console.log(error)
                this.usuarios = []
            })
        },
        borrarUsuario(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`/api/usuario/${id}`).then(response=>{
                    this.mostrarUsuarios()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>