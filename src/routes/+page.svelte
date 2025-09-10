<script lang="ts">
	import { cv } from '$lib';
	import Hero from '$lib/components/Hero.svelte';
	import ExperienceList from '$lib/components/ExperienceList.svelte';
	import SkillsGrid from '$lib/components/SkillsGrid.svelte';
	import EducationList from '$lib/components/EducationList.svelte';
</script>

<Hero profile={cv.profile} />
<div id="experiences"><ExperienceList experiences={cv.experiences} /></div>
<div id="skills"><SkillsGrid skills={cv.skills} /></div>
<div id="education"><EducationList education={cv.education} /></div>
