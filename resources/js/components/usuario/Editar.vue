<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header"><h4>Editar Usuario</h4></div>
                <div class="card-body">
                    <form @submit.prevent="actualizar">
                         <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Nombre</label>
                                    <input type="text" class="form-control" v-model="usuario.nombre">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Apellido</label>
                                    <input type="text" class="form-control" v-model="usuario.apellido">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Guardar</button>
                            </div>
                        </div>                          
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"editar-usuario",
    data(){
        return {
            usuario:{
                nombre:"",
                apellido:"",
            }
        }
    },
    mounted(){
        this.mostrarUsuario()
    },
    methods:{
        async mostrarUsuario(){
            await this.axios.get(`/api/usuario/${this.$route.params.id}`).then(response=>{
                const { nombre, apellido } = response.data
                this.usuario.nombre = nombre
                this.usuario.apellido = apellido
            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            await this.axios.put(`/api/usuario/${this.$route.params.id}`,this.usuario).then(response=>{
                this.$router.push({name:"mostrarUsuarios"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>