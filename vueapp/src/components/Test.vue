<template>
	<div class="test">
		<!--<h1>Test</h1>-->
		<h1>{{title}}</h1>
		<p>{{user.firstName}}</p>
		<p v-text="user.lastName"></p>
		<p>{{titleHtml}}</p>
		<p v-html="titleHtml"></p>
		<p v-if="showName">showName True</p>
		<p v-else="showName">showName False</p>
		<ul>
			<li v-for="item in items">{{item.title}}</li>
		</ul>
		<input type="text" v-model="title">
		<button v-on:click="greet('Hello World')">Say Greeting</button>
		<br/>
		<input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
		<br/>
		<label>First Name : </label><input type="text" v-model="user.firstName">
		<br/>
		<label>Last Name : </label><input type="text" v-model="user.lastName">
		<br/>
		<h3>{{fullName}}</h3>
		<h2>{{msg}} </h2>
	</div>
</template>

<script>
	export default{
		name:'test',
		props:{
			msg:{
				type:String,
				default:'Footbar'
			}
		},
		data(){
		return {
				title:'Hello World',
				titleHtml:'<h1>Hello World<h1>',
				user:{
					firstName:'Manab',
					lastName:'Basu'
				},
				showName:true,
				items:[
				{title:'item one'},
				{title:'item two'},
				{title:'item three'}
				]
			}

		},
		methods:{
			greet:function(greeting){
				alert(greeting);
			},
			pressKey:function(e){
				console.log(e.target.value);
			},
			enterHit:function(){
				console.log('You hit enter');
			}

		},
		computed:{
			fullName:function(){
				return this.user.firstName+' '+this.user.lastName;
			}
		}
	}
</script>


<style scoped>

</style>