<template>
	<div class="welcome">
		<span class="splash"></span>
		<span id="nav-splash"></span>

		<div class="welcome-wrapper">
			<p class="welcome-flow-text">This Quarantine Season</p>
			<h1 class="welcome-title">Tip or Tricks</h1>
			<blockquote class="welcome-flow-text">By Chrome Developer Tools</blockquote>
		</div>
	</div>
</template>

<script>
export default {
	name: "Welcome",
	props: {}
};
</script>

<style >
.welcome {
	height: 100%;
	background: #512da8;
	overflow: hidden;
	-webkit-font-smoothing: antialiased;
}

.welcome .splash {
	height: 0px;
	padding: 0px;
	border: 130em solid #039be5;
	position: fixed;
	left: 50%;
	top: 100%;
	display: block;
	box-sizing: initial;
	overflow: hidden;

	border-radius: 50%;
	transform: translate(-50%, -50%);
	animation: puff 0.5s 1.8s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards,
		borderRadius 0.2s 2.3s linear forwards;
}

.welcome #nav-splash {
	background: #311b92;
	width: 56px;
	height: 56px;
	position: absolute;
	left: 50%;
	top: 50%;
	overflow: hidden;
	opacity: 0;
	transform: translate(-50%, -50%);
	border-radius: 50%;
	animation: init 0.5s 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards,
		moveDown 1s 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards,
		moveUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards,
		materia 0.5s 2.7s cubic-bezier(0.86, 0, 0.07, 1) forwards,
		hide 2s 2.9s ease forwards;
}

.welcome-wrapper {
	width: 70%;
	margin: 150px auto;
}
.welcome-flow-text {
	color: rgb(189, 189, 189);
	font-size: 50px;
}
blockquote.welcome-flow-text {
	padding-left: 30px;
	border-left: 5px solid;
	margin-left: 80px;
}
.welcome-title {
	font-family: "Architects Daughter", cursive;
	text-transform: uppercase;
	font-weight: 900;
	color: #eee;
	font-size: 120px;
	line-height: 70px;
	margin: 32px 0 25px 0;
}

@keyframes init {
	0% {
		width: 0px;
		height: 0px;
	}
	100% {
		width: 56px;
		height: 56px;
		margin-top: 0;
		opacity: 1;
	}
}

@keyframes puff {
	0% {
		top: 100%;
		height: 0px;
		padding: 0px;
	}
	100% {
		top: 50%;
		height: 100%;
		padding: 0px 100%;
	}
}

@keyframes borderRadius {
	0% {
		border-radius: 50%;
	}
	100% {
		border-radius: 0px;
	}
}

@keyframes moveDown {
	0% {
		top: 50%;
	}
	50% {
		top: 40%;
	}
	100% {
		top: 100%;
	}
}

@keyframes moveUp {
	0% {
		background: #311b92;
		top: 100%;
	}
	50% {
		top: 40%;
	}
	100% {
		top: 50%;
		background: #039be5;
	}
}

@keyframes materia {
	0% {
		background: #039be5;
	}
	50% {
		background: #039be5;
		top: 40px;
	}
	100% {
		background: #311b92;
		width: 100%;
		height: 64px;
		border-radius: 0px;
		top: 40px;
	}
}

@keyframes moveIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes hide {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}
</style>