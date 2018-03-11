<template>
	<div class="test">
		<h1>Users</h1>
		<form v-on:submit="addUser">
			<input type="text" v-model="newUser.name" placeholder="Enter Name">
			<br/>
			<input type="text" v-model="newUser.email" placeholder="Enter Email">
			<br/>
			<input type="submit" value="submit">
		</form>
		<ul>
			<li v-for="user in users">
				<input type="checkbox" class="toggle" v-model="user.contacted">
				<span :class="{contacted:user.contacted}">
				{{user.name}}:{{user.email}} <button v-on:click="deleteUser(user)" >x</button>
				</span>
			</li>	
		</ul>
	</div>
</template>

<script>
	export default{
		name:'users',
		
		data(){
		return {
				newUser:{},
				users:[{
					name:'Manab Ranjan Basu',
					email:'manab@mrb.com',
					contacted:false
				},
				{
					name:'Arpana Basu',
					email:'arpana@mrb.com',
					contacted:false
				},
				{
					name:'Mitanshu Basu',
					email:'mitanshu@mrb.com',
					contacted:false
				}
				]
			}

		},
		methods:{
			addUser:function(e){
				console.log('add');
				this.users.push({
					name:this.newUser.name,
					email:this.newUser.email,
					contacted:false
				});
				e.preventDefault();
			},
			deleteUser:function(user){
				this.users.splice(this.users.indexOf(user),1);
			}

		},
		computed:{
			
		}
	}
</script>


<style scoped>
	.contacted{
		text-decoration: line-through;
	}
</style>